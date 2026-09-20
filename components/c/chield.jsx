import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/f/fazk6vbkp.css';
import '../../css/a/almsit-4x.css';
import '../../css/y/y813v9jyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGlfZzvdqN" width="18" height="21" x="3" y="1" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="fazk6vbkp"/><path class="almsit-4x"/></mask><path mask="url(#SVGlfZzvdqN)" class="y813v9jyr"/>`,
		"fallback": "lets-icons:chield",
	});
}

export default Component;
