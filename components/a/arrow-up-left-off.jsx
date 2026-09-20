import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.al793e-oh {
  fill-rule: evenodd;
  d: path("M12.646 5.903a1 1 0 0 1-.905 1.086l-5.186.471a1 1 0 0 1-.181-1.991l5.185-.472a1 1 0 0 1 1.087.906");
}

.bd0_y8bmu {
  fill-rule: evenodd;
  d: path("M5.903 12.646a1 1 0 0 1-.906-1.087l.472-5.185a1 1 0 0 1 1.991.181l-.471 5.186a1 1 0 0 1-1.086.905");
}

.cuyn6tgcc {
  fill: currentColor;
}

.jrp3z4b2s {
  fill-rule: evenodd;
  d: path("M7.172 7.172a1 1 0 0 1 1.414 0l5.657 5.656a1 1 0 0 1-1.415 1.415L7.172 8.586a1 1 0 0 1 0-1.414");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="bd0_y8bmu"/><path clip-rule="evenodd" class="al793e-oh"/><path clip-rule="evenodd" class="jrp3z4b2s"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:arrow-up-left-off",
	});
}

export default Component;
