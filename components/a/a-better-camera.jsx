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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fnokx6qyn {
  d: path("M26.192 20.204h-4.384L19.616 24l2.192 3.796h4.384L28.384 24zM28.384 24l5.901 10.221m-20.57-20.442L19.616 24m8.093-14.017l-5.901 10.221m4.384 7.592l-5.901 10.221m1.517-10.221H10.003m16.189-7.592h11.805");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ye2xqk-tr {
  cx: 24px;
  cy: 24px;
  r: 14.5px;
}
</style><g class="y9tr6bcfx"><circle class="ye2xqk-tr"/><path class="fnokx6qyn"/></g><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:a-better-camera",
	});
}

export default Component;
