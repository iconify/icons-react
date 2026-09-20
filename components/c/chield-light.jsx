import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/p/phpwu4bxi.css';
import '../../css/a/almsit-4x.css';
import '../../css/r/r9d2jab6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGgM9GCdzR" width="16" height="19" x="4" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="phpwu4bxi"/><path class="almsit-4x"/></mask><path mask="url(#SVGgM9GCdzR)" class="r9d2jab6j"/>`,
		"fallback": "lets-icons:chield-light",
	});
}

export default Component;
