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
		"content": `<style>.adx2vma9m {
  fill: var(--svg-color--0c364f, #0c364f);
  d: path("m29 9l-13 7v14l13-7z");
}

.gue3qnboe {
  fill: var(--svg-color--99cbfe, #99cbfe);
  d: path("m3 23l13-7v14z");
}

.hisz0jf8h {
  fill: var(--svg-color--b44cfe, #b44cfe);
  d: path("M3 23V9l13-7v28z");
}

.ifw1er6ou {
  fill: var(--svg-color--9601fe, #9601fe);
  d: path("m3 9l13 7l13-7l-13-7z");
}
</style><path class="hisz0jf8h"/><path class="ifw1er6ou"/><path class="gue3qnboe"/><path class="adx2vma9m"/>`,
		"fallback": "vscode-icons:file-type-typedoc",
	});
}

export default Component;
