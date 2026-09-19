import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/d/dwxh3eb8p.css';
import '../../css/j/jf883isdf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCn6z1b0J"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="dwxh3eb8p"/><path class="jf883isdf"/></g></mask></defs><path mask="url(#SVGCn6z1b0J)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bottom-bar",
	});
}

export default Component;
