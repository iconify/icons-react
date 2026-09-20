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
		"content": `<style>.gyn91dbnf {
  fill: var(--svg-color--938b98, #938b98);
  d: path("M6.568 20.83A9.3 9.3 0 0 0 16 30a2.62 2.62 0 1 0 0-5.24a4.027 4.027 0 0 1-4.117-3.93a2.656 2.656 0 0 0-5.312 0Z");
  opacity: var(--svg-opacity--0-7, 0.7);
}

.hvje6z-hw {
  fill: var(--svg-color--e73536, #e73536);
  d: path("M16 30a9.3 9.3 0 0 0 9.428-9.17a2.656 2.656 0 0 0-5.312 0A4.027 4.027 0 0 1 16 24.76A2.62 2.62 0 1 0 16 30");
  opacity: var(--svg-opacity--0-8, 0.8);
}

.iufk21b3n {
  fill: var(--svg-color--4c3e54, #4c3e54);
  d: path("m7.693 13.36l13.552 9.664a2.637 2.637 0 0 0 3.7-.645a2.7 2.7 0 0 0-.639-3.74L10.755 8.975a2.637 2.637 0 0 0-3.7.645a2.7 2.7 0 0 0 .638 3.74");
  opacity: var(--svg-opacity--0-7, 0.7);
}

.qnx96ac6e {
  fill: var(--svg-color--938b98, #938b98);
  d: path("M25.432 11.17A9.3 9.3 0 0 0 16 2a2.62 2.62 0 1 0 0 5.24a4.027 4.027 0 0 1 4.117 3.93a2.656 2.656 0 0 0 5.312 0Z");
  opacity: var(--svg-opacity--0-7, 0.7);
}

.smkz4g5fm {
  fill: var(--svg-color--e73536, #e73536);
  d: path("M16 2a9.3 9.3 0 0 0-9.428 9.17a2.656 2.656 0 0 0 5.312 0A4.027 4.027 0 0 1 16 7.24A2.62 2.62 0 1 0 16 2");
  opacity: var(--svg-opacity--0-8, 0.8);
}
</style><path class="smkz4g5fm"/><path class="qnx96ac6e"/><path class="hvje6z-hw"/><path class="gyn91dbnf"/><path class="iufk21b3n"/>`,
		"fallback": "vscode-icons:file-type-solidarity",
	});
}

export default Component;
