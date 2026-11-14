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
		"content": `<style>.ffwqn2bkb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.25 6q0-3.25 3.25-3.25h11q3.25 0 3.25 3.25v8q0 3.25-3.25 3.25h-6.218l-3.788 3.314q-.112.099-.254.146q-.141.048-.29.038t-.282-.076q-.134-.066-.232-.178q-.09-.103-.138-.23q-.048-.128-.048-.264v-2.755q-3-.123-3-3.245zm8 2.5h1.5v-.25q0-.75-.75-.75t-.75.75zm3 .497V8.25Q14.25 6 12 6T9.75 8.25v.588q-1 .581-1 2.162v.25q0 2.5 2.5 2.5h1.5q1.036 0 1.768-.732t.732-1.768V11q0-1.036-.732-1.768q-.129-.129-.268-.235");
}
</style><path class="ffwqn2bkb"/>`,
		"fallback": "uix-solid:chat-lock",
	});
}

export default Component;
