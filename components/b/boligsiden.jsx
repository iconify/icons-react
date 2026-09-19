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
		"content": `<style>.ag65klb_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24L24 5.5L5.5 24v18.5h37z");
}

.cd_xkobwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 13.327V24h18.5");
}

.y4i4n29ti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 13.327L11.192 26.135v10.673h25.616V24");
}
</style><path class="ag65klb_f"/><path class="cd_xkobwx"/><path class="y4i4n29ti"/>`,
		"fallback": "arcticons:boligsiden",
	});
}

export default Component;
