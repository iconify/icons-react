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
		"content": `<style>.g44i30b7g {
  fill: currentColor;
  d: path("M18.116 21.48H11.5v-3.517q-2.325-.177-3.912-1.889T6 12V2h12v10q0 2.362-1.588 4.074t-3.912 1.89v2.517h5.616zM13.75 13.5h3.016q.107-.365.17-.737T17 12v-1.5h-3.5v-1H17v-3h-4.5v-1H17V3H7v8.5h2.75q.71 0 1.341.317t1.055.89q.277.391.708.592t.896.201");
}
</style><path class="g44i30b7g"/>`,
		"fallback": "material-symbols-light:fluid-sharp",
	});
}

export default Component;
