import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/z/z78yszbru.css';
import '../../css/i/ilgfvfyit.css';
import '../../css/j/jv39n-c4r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFpImBdtk"><g class="aql7dnt-u"><path class="qtgswnn4u"/><path class="z78yszbru"/><path class="ilgfvfyit"/><path class="jv39n-c4r"/></g></mask></defs><path mask="url(#SVGFpImBdtk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:email-lock",
	});
}

export default Component;
