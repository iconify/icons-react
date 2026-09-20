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
		"content": `<style>.d_cfkw8ds {
  fill: var(--svg-color--dedede, #dedede);
  fill-rule: evenodd;
  d: path("M0 0h4.9v10.7H0zm1.2 2.2h2.45v.5H1.2zm0 1.1h2.45v.5H1.2zm0 4.7h2.45v.5H1.2");
}

.erojftbjz {
  fill: var(--svg-color--455a64, #455a64);
  d: path("M16 2a14 14 0 0 1 0 28");
}

.lcmoqubjw {
  fill: var(--svg-color--546e7a, #546e7a);
  d: path("M16 2a14 14 0 0 0 0 28");
}
</style><defs><path id="SVGRd87rb5k" class="d_cfkw8ds"/></defs><path class="lcmoqubjw"/><path class="erojftbjz"/><use x="5.4" y="10.8" href="#SVGRd87rb5k"/><use x="11" y="10.8" href="#SVGRd87rb5k"/><use x="1.3" y="21" href="#SVGRd87rb5k" transform="rotate(-45)"/>`,
		"fallback": "vscode-icons:file-type-ng-packagr",
	});
}

export default Component;
