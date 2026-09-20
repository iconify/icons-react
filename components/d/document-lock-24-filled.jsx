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
		"content": `<style>.u0a01vbwk {
  fill: currentColor;
  d: path("M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.05q.05-.243.05-.5v-5a2.5 2.5 0 0 0-2-2.45V14a3.5 3.5 0 0 0-6-2.45V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM4 15h-.5A1.5 1.5 0 0 0 2 16.5v5A1.5 1.5 0 0 0 3.5 23h6a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9.5 15H9v-1a2.5 2.5 0 0 0-5 0zm1.5-1a1 1 0 1 1 2 0v1h-2zm2 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="u0a01vbwk"/>`,
		"fallback": "fluent:document-lock-24-filled",
	});
}

export default Component;
