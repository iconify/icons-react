import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b55bfubsx.css';
import '../../css/i/itkqv0bnq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDJbpMdSq"><g class="aql7dnt-u"><path class="b55bfubsx"/><path class="itkqv0bnq"/></g></mask></defs><path mask="url(#SVGDJbpMdSq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:delete-two",
	});
}

export default Component;
