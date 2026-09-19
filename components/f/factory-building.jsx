import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bce03b55u.css';
import '../../css/o/o1ppvf-yk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGD0pARXmg"><g class="wwvp95byt"><path class="bce03b55u"/><path class="o1ppvf-yk"/></g></mask></defs><path mask="url(#SVGD0pARXmg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:factory-building",
	});
}

export default Component;
