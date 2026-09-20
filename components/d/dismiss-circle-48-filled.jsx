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
		"content": `<style>.vrh-49b1i {
  fill: currentColor;
  d: path("M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4m-6.116 12.116l-.102-.091a1.25 1.25 0 0 0-1.564 0l-.102.091l-.091.102a1.25 1.25 0 0 0 0 1.564l.091.102L22.233 24l-6.117 6.116l-.091.102a1.25 1.25 0 0 0 0 1.564l.091.102l.102.091a1.25 1.25 0 0 0 1.564 0l.102-.091L24 25.767l6.116 6.117l.102.091a1.25 1.25 0 0 0 1.564 0l.102-.091l.091-.102a1.25 1.25 0 0 0 0-1.564l-.091-.102L25.767 24l6.117-6.116l.091-.102a1.25 1.25 0 0 0 0-1.564l-.091-.102l-.102-.091a1.25 1.25 0 0 0-1.564 0l-.102.091L24 22.233zl-.102-.091z");
}
</style><path class="vrh-49b1i"/>`,
		"fallback": "fluent:dismiss-circle-48-filled",
	});
}

export default Component;
