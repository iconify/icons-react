import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wo_81unih {
  fill: currentColor;
  d: path("M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l-1.118 2.235c-.182.364-.273.547-.229.726c.044.18.21.298.542.535l1.916 1.368c.416.297.624.445.65.664s-.14.413-.472.8l-1.686 1.968c-.286.333-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.xwbwyza6z {
  fill: currentColor;
  d: path("M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501l-1.118 2.235c-.182.364-.273.547-.229.726c.044.18.21.298.542.535l1.916 1.368c.416.297.624.445.65.664s-.14.413-.472.8l-1.686 1.968c-.286.333-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c1 0 2-.77 3.038-1.59");
}
</style><path class="xwbwyza6z"/><path class="wo_81unih"/>`,
		"fallback": "solar:heart-broken-bold-duotone",
	});
}

export default Component;
