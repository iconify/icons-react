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
		"content": `<style>.re0sae42q {
  fill: currentColor;
  d: path("M14 20V8h8v12zm4-7.5q.325 0 .538-.225t.212-.525q0-.325-.213-.537T18 11q-.3 0-.525.213t-.225.537q0 .3.225.525T18 12.5M2 20V4h20v2H12v14z");
}
</style><path class="re0sae42q"/>`,
		"fallback": "material-symbols:devices-2-sharp",
	});
}

export default Component;
