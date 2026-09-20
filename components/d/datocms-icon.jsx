import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":259};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a6iavob4n {
  d: path("M128.002.653H0v257.646h128.002c64.017 0 127.998-57.68 127.998-128.805C256 58.368 192.019.653 128.002.653m0 187.36c-32.33-.013-58.528-26.231-58.516-58.56s26.23-58.529 58.559-58.517c32.33.011 58.529 26.228 58.518 58.558a58.52 58.52 0 0 1-58.561 58.518");
}

.jq5yj5b5h {
  stop-color: var(--svg-color--ff593d, #ff593d);
}

.rmju0ccrn {
  stop-color: var(--svg-color--ff7751, #ff7751);
}
</style><defs><linearGradient id="SVGnb50D8bz" x1="0%" x2="100%" y1="49.999%" y2="49.999%"><stop offset="0%" class="jq5yj5b5h"/><stop offset="100%" class="rmju0ccrn"/></linearGradient></defs><path fill="url(#SVGnb50D8bz)" class="a6iavob4n"/>`,
		"fallback": "logos:datocms-icon",
	});
}

export default Component;
