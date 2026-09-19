import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/f/ft9w2fb4q.css';
import '../../css/h/hocjhx65h.css';
import '../../css/a/a3x0wi1cq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGp2QLQbYX"><g class="hv130ab-t"><path class="ft9w2fb4q"/><path class="hocjhx65h"/><path class="a3x0wi1cq"/></g></mask></defs><path mask="url(#SVGp2QLQbYX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:church-two",
	});
}

export default Component;
