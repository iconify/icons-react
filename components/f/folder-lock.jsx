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
		"content": `<style>.rlpu09bls {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 7q0-2.75 2.75-2.75h4.5q.149 0 .287.057t.243.163l1.781 1.78H19q2.75 0 2.75 2.75v8q0 2.75-2.75 2.75H5q-2.75 0-2.75-2.75zm9 5.25h1.5V12q0-.75-.75-.75t-.75.75zm3 .497V12q0-2.25-2.25-2.25T9.75 12v.588q-1 .581-1 2.162V15q0 1.036.732 1.768t1.768.732h1.5q1.036 0 1.768-.732T15.25 15v-.25q0-1.036-.732-1.768q-.129-.129-.268-.235");
}
</style><path class="rlpu09bls"/>`,
		"fallback": "uix-solid:folder-lock",
	});
}

export default Component;
