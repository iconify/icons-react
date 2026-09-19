import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ghrtoub3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.016 17.659l11.042 6.373l10.97-6.327l-11.042-6.373z");
}

.ixf-2_qbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.218 34.197L24.058 44.5l17.724-10.229V13.803L23.942 3.5L6.218 13.729z");
}

.zsjol8xil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.058 36.693l10.97-6.328v-12.66l-10.97 6.327zM13.016 30.32l11.042 6.373V24.032l-11.042-6.373z");
}
</style><path class="zsjol8xil"/><path class="ghrtoub3y"/><path class="ixf-2_qbq"/>`,
		"fallback": "arcticons:dropsync",
	});
}

export default Component;
