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
		"content": `<style>.agyvkobmi {
  fill: currentColor;
  d: path("M9 5.5a3.5 3.5 0 0 1-3 3.465V15a3 3 0 0 0 3 3h2.69l-.97-.97a.75.75 0 1 1 1.06-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H9A4.5 4.5 0 0 1 4.5 15V8.855A3.502 3.502 0 0 1 5.5 2A3.5 3.5 0 0 1 9 5.5m13 13a3.5 3.5 0 1 1-4-3.465V9a3 3 0 0 0-3-3h-1.94l.97.97a.75.75 0 0 1-1.06 1.06l-2.25-2.25a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 1 1 1.06 1.06l-.97.97H15A4.5 4.5 0 0 1 19.5 9v6.145c1.446.43 2.5 1.77 2.5 3.355");
}
</style><path class="agyvkobmi"/>`,
		"fallback": "fluent:branch-compare-24-filled",
	});
}

export default Component;
