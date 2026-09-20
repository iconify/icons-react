import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b-bd4f8qk {
  fill: var(--svg-color--338abd, #338abd);
  d: path("M16 25.754L6.242 16c-1.877 1.77-4.65 4.68-3.866 5.465l8.109 8.114c.759.764 5.515-3.825 5.515-3.825");
}

.c7jc7ptql {
  fill: var(--svg-color--97d4f9, #97d4f9);
  d: path("M6.242 16L20.064 2.176A.1.1 0 0 0 19.991 2h-8.666a1.03 1.03 0 0 0-.729.3L2.3 10.6a1.03 1.03 0 0 0-.3.729v9.51a.46.46 0 0 0 .17.4l.21.223c-.807-.836 2.13-3.723 3.862-5.462");
}

.ipbp1mbro {
  fill: var(--svg-color--338abd, #338abd);
  d: path("m29.879 10.793l-3.973-3.979a.515.515 0 0 0-.729 0l-3.926 3.937a.515.515 0 0 0 0 .727L25.752 16s3.986-3.7 4.224-4.91a.33.33 0 0 0-.097-.297");
}

.lxpgcbchb {
  fill: var(--svg-color--97d4f9, #97d4f9);
  d: path("M29.985 10.982c0 1.105-4.233 5.018-4.233 5.018L16 25.754s-4.766 4.588-5.515 3.822l.187.192a.9.9 0 0 0 .69.232h9.3a1.03 1.03 0 0 0 .729-.3l8.309-8.309a.95.95 0 0 0 .3-.729Z");
}
</style><path class="ipbp1mbro"/><path class="lxpgcbchb"/><path class="b-bd4f8qk"/><path class="c7jc7ptql"/>`,
		"fallback": "vscode-icons:file-type-galen",
	});
}

export default Component;
