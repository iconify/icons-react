import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snp287xku.css';
import '../../css/p/pp8nmdb7j.css';
import '../../css/k/k5loyzbkf.css';
import '../../css/w/w5u46jbvk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snp287xku"/><path class="pp8nmdb7j"/><path class="k5loyzbkf"/><path class="w5u46jbvk"/>`,
		"fallback": "streamline-emojis:diamond-suit",
	});
}

export default Component;
