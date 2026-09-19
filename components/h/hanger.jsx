import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iavqdjdgi.css';
import '../../css/n/npiz6qlvn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGblMKScBJ"><g class="aql7dnt-u"><path clip-rule="evenodd" class="iavqdjdgi"/><path class="npiz6qlvn"/></g></mask></defs><path mask="url(#SVGblMKScBJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hanger",
	});
}

export default Component;
