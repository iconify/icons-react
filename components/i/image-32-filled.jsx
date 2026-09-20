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
		"content": `<style>.ug2fgz2ke {
  fill: currentColor;
  d: path("M7.5 3A4.5 4.5 0 0 0 3 7.5v17c0 .849.235 1.643.644 2.32l10.588-10.588a2.5 2.5 0 0 1 3.536 0l10.588 10.589A4.5 4.5 0 0 0 29 24.5v-17A4.5 4.5 0 0 0 24.5 3zm17 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.47 17.262L16.354 17.646a.5.5 0 0 0-.707 0L5.03 28.262A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 2.47-.738");
}
</style><path class="ug2fgz2ke"/>`,
		"fallback": "fluent:image-32-filled",
	});
}

export default Component;
