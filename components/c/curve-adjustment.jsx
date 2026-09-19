import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fqzg-n1xw.css';
import '../../css/z/zz8y8qwjw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnogYlcWb"><g class="v3_i3wktz"><path class="fqzg-n1xw"/><path class="zz8y8qwjw"/></g></mask></defs><path mask="url(#SVGnogYlcWb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:curve-adjustment",
	});
}

export default Component;
