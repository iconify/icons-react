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
		"content": `<style>.cn82_9b1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 12.649L12.296 23.243h23.408z");
}

.eirbm1a2q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 12.649l-4.153 10.594h8.306zm0 14.378l-2.265 8.325h4.53z");
}

.eos99o0hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.847 23.243h8.306v12.109h-8.306zM24 27.027v8.325h0z");
}

.kpyqlfbgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 23.243h37v12.109h-37z");
}

.kunnu1c-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 12.649L5.5 23.243h37z");
}

.xnwnr5h2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.674 23.243h22.653v12.109H12.674z");
}
</style><path class="kunnu1c-j"/><path class="cn82_9b1z"/><path class="eirbm1a2q"/><path class="kpyqlfbgu"/><path class="xnwnr5h2f"/><path class="eos99o0hr"/>`,
		"fallback": "arcticons:emoji-circus-tent",
	});
}

export default Component;
