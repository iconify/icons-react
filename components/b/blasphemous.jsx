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
		"content": `<style>.ptwj4xbql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.98 21.402L26.578 24l7.936 7.936L23.98 42.469L13.446 31.936L21.382 24");
}

.y1o_ryblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.916 34.532L21.382 24l-7.936-7.936L23.98 5.53l10.534 10.534L26.578 24m-2.597-2.598l-7.935-7.935M23.98 5.53V3.5m-.86.984h1.72m-.86 37.986v2.03m.86-.984h-1.72m-9.674-27.452h-.784m.784 15.872h-.784m22.635-15.872h-.783m.824 15.872h-.824");
}
</style><path class="ptwj4xbql"/><path class="y1o_ryblr"/>`,
		"fallback": "arcticons:blasphemous",
	});
}

export default Component;
