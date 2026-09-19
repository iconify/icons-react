import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xd0085bqe.css';
import '../../css/y/y8nw6jm7n.css';
import '../../css/e/e5fqixblw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcz1FvvSg"><g class="rohhhzb0l"><path class="xd0085bqe"/><rect class="y8nw6jm7n"/><path class="e5fqixblw"/></g></mask></defs><path mask="url(#SVGcz1FvvSg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:computer",
	});
}

export default Component;
