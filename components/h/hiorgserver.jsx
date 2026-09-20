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
		"content": `<style>.cd2-0nvrx {
  cx: 11.172px;
  cy: 16.74px;
  r: 2.566px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.frm7a9o7p {
  cx: 7.066px;
  cy: 28.307px;
  r: 2.566px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l8byxuxus {
  cx: 40.934px;
  cy: 28.307px;
  r: 2.566px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n8t43ivqa {
  cx: 36.828px;
  cy: 16.74px;
  r: 2.566px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nr65_4acn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.907 22.576H17.093a.837.837 0 0 0-.838.837v13.815c0 .462.375.837.838.837h13.814a.837.837 0 0 0 .837-.837V23.413a.837.837 0 0 0-.837-.837");
}

.qdxc4ybbm {
  cx: 24px;
  cy: 12.502px;
  r: 2.566px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="nr65_4acn"/><circle class="frm7a9o7p"/><circle class="l8byxuxus"/><circle class="qdxc4ybbm"/><circle class="cd2-0nvrx"/><circle class="n8t43ivqa"/>`,
		"fallback": "arcticons:hiorgserver",
	});
}

export default Component;
