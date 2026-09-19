import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/qamo9rbbx.css';
import '../../css/m/m37tbt41a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZ6jdHdfu"><g class="v3_i3wktz"><path class="qamo9rbbx"/><path class="m37tbt41a"/></g></mask></defs><path mask="url(#SVGZ6jdHdfu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:degree-hat",
	});
}

export default Component;
