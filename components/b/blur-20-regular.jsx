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
		"content": `<style>.s5he8zbky {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 0 5.292 14H10v1a7 7 0 1 1 0-14h3.876A7.96 7.96 0 0 0 10 2m0 2h5.292q.52.459.953 1H10zm6.93 2H10v1h7.419a8 8 0 0 0-.49-1M10 8h7.748q.127.49.19 1H10zm8 2h-8v1h7.938q.062-.492.062-1m-8 2h7.748a8 8 0 0 1-.33 1H10zm6.93 2H10v1h6.245q.38-.473.685-1");
}
</style><path class="s5he8zbky"/>`,
		"fallback": "fluent:blur-20-regular",
	});
}

export default Component;
