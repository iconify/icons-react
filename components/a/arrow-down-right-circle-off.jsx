import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

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

.ftwjakbno {
  fill-rule: evenodd;
  d: path("M15.828 15.829a1 1 0 0 1-1.414 0l-5.657-5.657a1 1 0 1 1 1.415-1.415l5.656 5.657a1 1 0 0 1 0 1.415");
}

.kphejjb8s {
  fill-rule: evenodd;
  d: path("M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13");
}

.ouj4j7bwi {
  fill-rule: evenodd;
  d: path("M10.354 17.098a1 1 0 0 1 .906-1.087l5.185-.471a1 1 0 1 1 .181 1.991l-5.185.472a1 1 0 0 1-1.087-.905");
}

.qf597xb3v {
  fill-rule: evenodd;
  d: path("M17.098 10.354a1 1 0 0 1 .905 1.087l-.472 5.185a1 1 0 1 1-1.991-.18l.471-5.186a1 1 0 0 1 1.087-.906");
}

.t_j776bmu {
  d: path("M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="qf597xb3v"/><path clip-rule="evenodd" class="ouj4j7bwi"/><path clip-rule="evenodd" class="ftwjakbno"/><path class="t_j776bmu"/><path clip-rule="evenodd" class="kphejjb8s"/></g>`,
		"fallback": "pepicons-pop:arrow-down-right-circle-off",
	});
}

export default Component;
