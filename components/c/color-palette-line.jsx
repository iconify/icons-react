import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi4rgpbsh.css';
import '../../css/i/ih3xvpyom.css';
import '../../css/j/jxgdkxb5r.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi4rgpbsh"/><path class="ih3xvpyom"/><path class="jxgdkxb5r"/>`,
		"fallback": "clarity:color-palette-line",
	});
}

export default Component;
