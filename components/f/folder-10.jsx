import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.rme23obij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.036 33.158c-2.476 0-4.457-1.981-4.457-4.292V24.41c0-2.476 1.98-4.292 4.292-4.292h0c2.476 0 4.291 1.98 4.291 4.292v4.456c.33 2.476-1.65 4.292-4.126 4.292M15.777 21.886L19 20.114v13.047");
}
</style><path class="h0qgeuwow"/><path class="rme23obij"/>`,
		"fallback": "arcticons:folder-10",
	});
}

export default Component;
