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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gc1a5b0mp {
  fill-rule: evenodd;
  d: path("M12.828 12.829a1 1 0 0 1-1.414 0L5.757 7.172a1 1 0 1 1 1.415-1.415l5.656 5.657a1 1 0 0 1 0 1.415");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.ymxec-9gg {
  fill-rule: evenodd;
  d: path("M14.098 7.354a1 1 0 0 1 .905 1.087l-.472 5.185a1 1 0 1 1-1.991-.18l.471-5.186a1 1 0 0 1 1.087-.906");
}

.zpayg-n9a {
  fill-rule: evenodd;
  d: path("M7.354 14.098a1 1 0 0 1 .906-1.087l5.185-.471a1 1 0 1 1 .181 1.991l-5.185.472a1 1 0 0 1-1.087-.905");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="ymxec-9gg"/><path clip-rule="evenodd" class="zpayg-n9a"/><path clip-rule="evenodd" class="gc1a5b0mp"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:arrow-down-right-off",
	});
}

export default Component;
