import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ik_jr93vo {
  fill: currentColor;
  d: path("M14 7h-3.5q-.625 0-1.062-.437T9 5.5t.438-1.062T10.5 4h10q.625 0 1.063.438T22 5.5t-.437 1.063T20.5 7H17v11.5q0 .625-.437 1.063T15.5 20t-1.062-.437T14 18.5zm-9 5H3.5q-.625 0-1.062-.437T2 10.5t.438-1.062T3.5 9h6q.625 0 1.063.438T11 10.5t-.437 1.063T9.5 12H8v6.5q0 .625-.437 1.063T6.5 20t-1.062-.437T5 18.5z");
}
</style><path class="ik_jr93vo"/>`,
		"fallback": "material-symbols:format-size-rounded",
	});
}

export default Component;
