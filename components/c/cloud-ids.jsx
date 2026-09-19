import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp5ecabad.css';
import '../../css/y/ydng6ub1v.css';
import '../../css/o/omk7q06vg.css';
import '../../css/c/ceddezowq.css';
import '../../css/g/gxa31hbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp5ecabad"/><path class="ydng6ub1v"/><path class="omk7q06vg"/><path class="ceddezowq"/><path class="gxa31hbik"/>`,
		"fallback": "gcp:cloud-ids",
	});
}

export default Component;
