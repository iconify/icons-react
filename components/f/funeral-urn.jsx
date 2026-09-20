import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9xv65aqf.css';
import '../../css/x/xcozy5oqj.css';
import '../../css/c/ccxnc8osh.css';
import '../../css/u/ufqw6fb7x.css';
import '../../css/r/rh5rcdftn.css';
import '../../css/h/h9adkbu6a.css';
import '../../css/d/dspsq6z-j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9xv65aqf"/><path class="xcozy5oqj"/><path class="ccxnc8osh"/><path class="ufqw6fb7x"/><path class="rh5rcdftn"/><path class="h9adkbu6a"/><path class="dspsq6z-j"/>`,
		"fallback": "openmoji:funeral-urn",
	});
}

export default Component;
