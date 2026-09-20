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
		"content": `<style>.n55yomg9o {
  fill: currentColor;
  d: path("M12.138 11.138q.362-.363.362-.888t-.363-.888T11.25 9t-.888.363t-.362.887t.363.888t.887.362t.888-.363M11.425 16L17 10.425L15.575 9L10 14.575zm5.213-.363q.362-.362.362-.887t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362t.888-.363M19 19H8q-.825 0-1.412-.587T6 17V3q0-.825.588-1.412T8 1h7l6 6v10q0 .825-.587 1.413T19 19M14 8h5l-5-5zM4 23q-.825 0-1.412-.587T2 21V7h2v14h11v2z");
}
</style><path class="n55yomg9o"/>`,
		"fallback": "material-symbols:heap-snapshot-multiple",
	});
}

export default Component;
