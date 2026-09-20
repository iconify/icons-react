import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9cn4oz7w.css';
import '../../css/f/fjvn43bcd.css';
import '../../css/z/z9wzhbchn.css';
import '../../css/c/c0yojvukz.css';
import '../../css/f/fq48kswtk.css';
import '../../css/l/ljqy3wb-t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9cn4oz7w"/><path class="fjvn43bcd"/><path class="z9wzhbchn"/><path class="c0yojvukz"/><path class="fq48kswtk"/><path class="ljqy3wb-t"/>`,
		"fallback": "material-icon-theme:azure-pipelines",
	});
}

export default Component;
