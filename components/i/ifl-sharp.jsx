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
		"content": `<style>.ffvbwybun {
  fill: currentColor;
  d: path("M16.774 16.772q.38-.382.38-.928t-.382-.926t-.928-.38t-.926.383t-.38.928t.383.925t.928.38t.925-.382m-3.846-3.846q.38-.383.38-.928t-.382-.926t-.928-.38t-.926.382q-.38.383-.38.928t.382.926t.928.38t.926-.382M9.082 9.08q.38-.382.38-.928t-.383-.926t-.928-.38t-.925.382t-.38.928t.382.926t.928.38t.926-.382M4 20V4h16v16z");
}
</style><path class="ffvbwybun"/>`,
		"fallback": "material-symbols-light:ifl-sharp",
	});
}

export default Component;
