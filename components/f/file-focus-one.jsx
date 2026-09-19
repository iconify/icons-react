import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/u/uzfquqw0e.css';
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
		"content": `<defs><mask id="SVGFjqP2c8q"><g class="aql7dnt-u"><path class="m3rbq0wjz"/><path class="uzfquqw0e"/><path class="nzzcombqn"/></g></mask></defs><path mask="url(#SVGFjqP2c8q)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-focus-one",
	});
}

export default Component;
