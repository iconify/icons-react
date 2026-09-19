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
		"content": `<style>.bbxo2ej_o {
  width: 10.853px;
  height: 6.492px;
  x: 18.725px;
  y: 20.678px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.052px;
}

.j67jp5b_w {
  width: 21.605px;
  height: 31.393px;
  x: 13.35px;
  y: 12.107px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.577px;
}

.oxij7b_gv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.325 12.107l6.491-7.404M12.184 4.5l7.1 7.607");
}
</style><rect class="j67jp5b_w"/><rect class="bbxo2ej_o"/><path class="oxij7b_gv"/>`,
		"fallback": "arcticons:huawei-remotecontroller",
	});
}

export default Component;
