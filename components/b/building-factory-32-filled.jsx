import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t-tkw6b2q {
  fill: currentColor;
  d: path("M2.824 4.898A3 3 0 0 1 5.822 2H8.18a3 3 0 0 1 2.998 2.898l.753 22A3 3 0 0 1 8.93 30H5.07a3 3 0 0 1-2.999-3.102zM11.577 30a3.99 3.99 0 0 0 1.352-3.137l-.47-13.736l6.835-6.834A1 1 0 0 1 21 7v6.586l7.293-7.293A1 1 0 0 1 30 7v19.5a3.5 3.5 0 0 1-3.478 3.5zm13.424-9.5a1.5 1.5 0 0 0-1.5-1.5h-5a1.5 1.5 0 0 0-1.5 1.5V28h8z");
}
</style><path class="t-tkw6b2q"/>`,
		"fallback": "fluent:building-factory-32-filled",
	});
}

export default Component;
