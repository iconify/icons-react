import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5hduo0jo.css';
import '../../css/y/yfrfny9-f.css';
import '../../css/m/mo1sg-b-y.css';
import '../../css/p/pzni1vbor.css';
import '../../css/d/dhie_2mgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z5hduo0jo"/><path class="yfrfny9-f"/><path class="mo1sg-b-y"/><path class="pzni1vbor"/><path class="dhie_2mgo"/></g>`,
		"fallback": "lucide-extended:cable-duotone",
	});
}

export default Component;
