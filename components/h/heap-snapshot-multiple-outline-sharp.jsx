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
		"content": `<style>.r_dxujbmd {
  fill: currentColor;
  d: path("M12.138 11.138q.362-.363.362-.888t-.363-.888T11.25 9t-.888.363t-.362.887t.363.888t.887.362t.888-.363M11.425 16L17 10.425L15.575 9L10 14.575zm5.213-.363q.362-.362.362-.887t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362t.888-.363M6 19V1h9l6 6v12zm8-11V3H8v14h11V8zM2 23V7h2v14h11v2zM8 3v5zv14z");
}
</style><path class="r_dxujbmd"/>`,
		"fallback": "material-symbols:heap-snapshot-multiple-outline-sharp",
	});
}

export default Component;
