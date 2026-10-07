import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae6usobhq.css';
import '../../css/v/v6zm26bls.css';
import '../../css/s/sa_3habye.css';
import '../../css/x/x3u0d6byq.css';
import '../../css/n/nft86achg.css';
import '../../css/x/xw5ihugjl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae6usobhq"/><path class="v6zm26bls"/><path class="sa_3habye"/><path class="x3u0d6byq"/><path class="nft86achg"/><path class="xw5ihugjl"/>`,
		"fallback": "devicon:aspire",
	});
}

export default Component;
