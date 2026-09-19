import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/k/ke3_mqb0c.css';
import '../../css/n/nzzcombqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjkdWadun"><g class="aql7dnt-u"><path class="m3rbq0wjz"/><path class="ke3_mqb0c"/><path class="nzzcombqn"/></g></mask></defs><path mask="url(#SVGjkdWadun)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-protection-one",
	});
}

export default Component;
