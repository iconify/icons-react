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
		"content": `<style>.xl74-ro_f {
  fill: var(--svg-color--8bc34a, #8bc34a);
  d: path("M14.216 24.167h-.989a3.24 3.24 0 0 1-2.811-1.649L6.667 16l4.681-8.167H16.2l-4.34 8.176l.057.032l2.019 3.459h2.884ZM8.455 10.535l-1.27-2.21a1 1 0 0 0-.859-.492H2l4 6.992ZM21.54 9.482a3.24 3.24 0 0 0-2.812-1.649h-1.205L15.045 12.5h2.975l2.063 3.5l-4.531 8.167h5.056L25.333 16Zm4.46 7.69l-2.47 4.27l1.283 2.233a1 1 0 0 0 .859.492H30Z");
}
</style><path class="xl74-ro_f"/>`,
		"fallback": "vscode-icons:file-type-gamemaker",
	});
}

export default Component;
