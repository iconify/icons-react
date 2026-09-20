import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cposx6b6s {
  fill: currentColor;
  d: path("M21.707 5.293a1 1 0 1 0-1.414 1.414l1.3 1.3c-4.553.152-7.05 2.852-9.268 5.25l-.06.064C9.939 15.837 7.896 18 4 18a1 1 0 1 0 0 2c4.813 0 7.392-2.788 9.675-5.257l.06-.064c2.24-2.423 4.219-4.52 7.842-4.67l-1.284 1.284a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414zM4 8c3.883 0 6.311 1.815 8.304 3.812q-.343.364-.666.715l-.106.115l-.593.637C9.084 11.41 7.146 10 4 10a1 1 0 1 1 0-2m17.593 11.993c-3.647-.122-5.975-1.878-7.897-3.805q.343-.364.666-.715l.106-.115l.593-.637c1.77 1.783 3.617 3.15 6.516 3.27l-1.284-1.284a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414z");
}
</style><path class="cposx6b6s"/>`,
		"fallback": "fluent:arrow-shuffle-28-filled",
	});
}

export default Component;
